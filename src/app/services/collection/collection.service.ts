import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CollectionRequest, CollectionResponse } from '../../types/collection.types';
import { AssociatedTagsResponse } from '../../types/recipe.types';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCollectionsV1() {
    return this.httpClient.get<CollectionResponse[]>(`${environment.api.collectionV1}`);
  }

  getCollectionV1(id: number) {
    return this.httpClient.get<CollectionResponse>(`${environment.api.collectionV1}/${id}`);
  }

  createCollectionV1(collection: CollectionRequest) {
    return this.httpClient.post<CollectionResponse>(`${environment.api.collectionV1}/`, collection);
  }

  updateCollectionV1(id: number, collection: CollectionRequest) {
    return this.httpClient.put<CollectionResponse>(`${environment.api.collectionV1}/${id}/`, collection);
  }

  deleteCollectionV1(collection: CollectionResponse) {
    return this.httpClient.delete<CollectionResponse>(`${environment.api.collectionV1}/${collection.id}/`, {body: {author: collection.author}});
  }

  getCollectionTagsV2(id: number) {
    return this.httpClient.get<AssociatedTagsResponse>(`${environment.api.collectionV2}/${id}/tags/`);
  }
}
