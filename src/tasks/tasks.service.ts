import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks ={
        firstName:"Hosseinmohammadipour",
        lastName:"KingMpr"
    }

    getallTasks(){
        return this.tasks
    }
}
