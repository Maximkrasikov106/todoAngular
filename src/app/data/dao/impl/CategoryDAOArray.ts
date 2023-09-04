import {CategoryDao} from "../interface/CategoryDao";
import {Observable, of} from "rxjs";
import {TestData} from "../../TestData";
import {Category} from "../../../model/Category";

export class CategoryDAOArray implements CategoryDao {

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category[]> {
    return undefined
  }

  add(T): Observable<Category> {
        return undefined;
    }

    delete(id: number): Observable<Category> {
        return undefined;
    }

    get(id: number): Observable<Category> {
        return undefined;
    }

    update(T): Observable<Category> {
        return undefined;
    }

}
