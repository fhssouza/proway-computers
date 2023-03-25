import { Injectable } from '@angular/core';
import { IProduct, products } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduct[] = products;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
