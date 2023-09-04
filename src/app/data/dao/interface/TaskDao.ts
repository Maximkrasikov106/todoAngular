import {Task} from '../../../model/Task';
import {Category} from '../../../model/Category';
import {CommonDao} from './CommonDao';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';

// специфичные методы для работы с задачами (которые не входят в обычный CRUD)
export interface TaskDAO extends CommonDao<Task> {


  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;

  getCompletedCountInCategory(category: Category): Observable<number>;

  getUncompletedCountInCategory(category: Category): Observable<number>;

  getTotalCountInCategory(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;


}
