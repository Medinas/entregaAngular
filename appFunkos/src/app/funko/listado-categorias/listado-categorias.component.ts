import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatFunko } from 'src/app/models/funko.model';
import { FunkoService } from 'src/app/services/funko.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.scss']
})
export class ListadoCategoriasComponent implements OnInit {
  constructor(private servicioFunkos: FunkoService, private dialog:MatDialog, private snackBar: MatSnackBar){}
  
  lCategorias: CatFunko[]=[];
  columnasMostradas: string[] = ['id', 'descCategoria', 'acciones'];
  dataSource = this.lCategorias;

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.servicioFunkos.getCat().subscribe(
      tFunkoResp=> {
        this.lCategorias = tFunkoResp;
      }
    );
  }

  eliminar(id: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent,{
      width:'350px',
      data:{
        mensaje: '¿Desea eliminar la categoría?'
      }
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result==='Si'){
        this.servicioFunkos.deleteCat(id)
        .subscribe((response)=>{
          this.snackBar.open('La categoría fue eliminada con éxito','',{duration:3000});
          this.cargarCategorias();
        })
      }
    });
  }

}
