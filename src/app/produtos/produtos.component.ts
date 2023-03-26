import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduct[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){};

  ngOnInit(): void {
      const produtos = this.produtosService.getAll();
      this.route.queryParamMap.subscribe(params =>{
        const descricao = params.get("descricao")?.toLowerCase();
        
        if (descricao){
          this.produtos = produtos.filter(produto => produto.description.toLowerCase().includes(descricao));
          return;
        }
        this.produtos = produtos;
      });
  }

}
