import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, query, doc, deleteDoc, updateDoc, setDoc, where, orderBy, startAt, endAt } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: CollectionReference<DocumentData>;

  constructor(private afs: Firestore) {
    this.productsCollection = collection(this.afs, 'products');
  }

  async getProducts(): Promise<Observable<Product[]>> {
    return collectionData(this.productsCollection, { idField: 'id' }) as Observable<Product[]>;  // converter promisse in observable;
  }

  async addProduct(p: Product) {

    const docRef = await addDoc(collection(this.afs, 'products'), {
      ...p
    });
    p.id = docRef.id;
    setDoc(docRef, p);
    // return this.productsCollection.add(p);
  }

  // Deletar um produto
  async deleteProduct(p: Product): Promise<void> {
    const productDocRef = doc(this.afs, `products/${p.id}`);
    return deleteDoc(productDocRef);
  }

  // Atualizar um produto
  async updateProduct(p: Product): Promise<void> {
    const productDocRef = doc(this.afs, `products/${p.id}`);
    return setDoc(productDocRef, { ...p }, { merge: true }); // Atualiza o documento, mesclando as mudanças
  }

  // Pesquisar produtos pelo nome
  searchByName(name: string): Observable<Product[]> {
    const productsCollectionRef = collection(this.afs, 'products');
    const q = query(
      productsCollectionRef,
      orderBy('name'),
      startAt(name),
      endAt(name + '\uf8ff')
    );
    return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
  }
}
