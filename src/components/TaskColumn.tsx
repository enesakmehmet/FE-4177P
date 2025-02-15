import { Task } from "../types/Task";
import { Col } from "react-bootstrap";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  status: string;
  tasks: Task[];
}

function TaskColumn({ status, tasks }: TaskColumnProps) {
  return (
    <Col>
      <h4>{status}</h4>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: "400px" }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
  );
}

export default TaskColumn;
