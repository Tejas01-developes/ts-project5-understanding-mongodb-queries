import bull from 'bull';

export const taskqueue=new bull(
    "task-queue",
    "redis://127.0.0.1:6379"
)