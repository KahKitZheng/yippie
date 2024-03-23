import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DragStartEvent,
  DragEndEvent,
  DndContext,
  DragOverlay,
  closestCenter,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ReportData } from "../../pages/ReportTemplateEditPage/ReportTemplateEditPage";
import ReportItemEditor from "../ReportItemEditor";
import { JSONContent } from "@tiptap/react";
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

type SortableReportItemProps = {
  items: ReportData[];
  itemIds: string[];
  onDragEnd: React.Dispatch<React.SetStateAction<ReportData[]>>;
  updateQuestion: (index: number, content: JSONContent) => void;
  removeQuestion: (id: string) => void;
};

export default function SortableReportItem(
  props: Readonly<SortableReportItemProps>,
) {
  const { items, itemIds, onDragEnd, updateQuestion, removeQuestion } = props;

  const [activeId, setActiveId] = useState<string | undefined>();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleOnDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleOnDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = itemIds.indexOf(active.id as string);
        const newIndex = itemIds.indexOf(over.id as string);

        const newReport = arrayMove(items, oldIndex, newIndex);

        newReport.forEach((report, index) => (report.order = index));
        onDragEnd(newReport);
      }

      setActiveId(undefined);
    },
    [itemIds, items, onDragEnd],
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      collisionDetection={closestCenter}
      modifiers={[restrictToFirstScrollableAncestor, restrictToVerticalAxis]}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <ReportItemEditor
            key={item.id}
            data={item}
            updateQuestion={updateQuestion}
            removeQuestion={removeQuestion}
          />
        ))}
        {createPortal(
          <div className="relative top-0">
            <DragOverlay adjustScale={false} dropAnimation={null}>
              {activeId ? (
                <ReportItemEditor
                  isDragged
                  data={items[itemIds.indexOf(activeId.toString())]}
                  updateQuestion={updateQuestion}
                  removeQuestion={removeQuestion}
                />
              ) : null}
            </DragOverlay>
          </div>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
}