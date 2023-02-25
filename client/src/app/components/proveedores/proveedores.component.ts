import { Component, HostBinding, IterableDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Proveedores } from 'src/app/models/proveedores.models';
import { ProveedoresService } from '../../services/proveedores.service'
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  @HostBinding('class') classes = 'modal-body';
  API_URI = 'http://localhost:3000/api';

  provee: Proveedores= {
    id: 0,
    NombreApellido:'',
    Cedula: '',
    NumeroCelular: '',
    CorreoElectronico: '',
    Direccion: '',
    NombreEmpresa: '',
    TelefonoEmpresa: '',
    DireccionEmpresa: '',
    CorreoEmpresa: ''
  }

  proveedoresArr: any = [];
  valfomr !: FormGroup;
  edit : boolean = true;
  constructor(private ProveedoresService: ProveedoresService, private router: Router , private activatedRoute : ActivatedRoute , private formBuldier : FormBuilder,) 
  {
    this.validFomr();
  }
  
  ngOnInit() {
    this.getMP();
  }

  validFomr(){
    this.valfomr = this.formBuldier.group({
      id:[this.provee.id, [Validators.required , Validators.pattern('^([A-Z]{2})([0-9]{3})$')]],
      NombreApellido:[this.provee.NombreApellido,[Validators.required, Validators.pattern('^([A-Za-z ]{2,25})$')]],
      Cedula:[this.provee.Cedula,[Validators.required, Validators.pattern('minlength="10" maxlength="10" ')]],
      NumeroCelular:[this.provee.NumeroCelular ,[Validators.required, Validators.pattern('minlength="10" maxlength="10" ')]],
      CorreoElectronico:[this.provee.CorreoElectronico,[Validators.required, Validators.pattern(' ^([0-9]{1,4})$')]],
      Direccion:[this.provee.Direccion,[Validators.required ]],
      NombreEmpresa:[this.provee.NombreEmpresa,[Validators.required ]],
      TelefonoEmpresa:[this.provee.TelefonoEmpresa,[Validators.required, Validators.pattern('minlength="10" maxlength="10" ')]],
      DireccionEmpresa:[this.provee.DireccionEmpresa,[Validators.required ]],
      CorreoEmpresa:[this.provee.CorreoEmpresa,[Validators.required ]],

    })

  }
  
  get codigo() {return this.valfomr.get('id');}
  saveNewMP() {
     
    delete this.provee.id;

    this.ProveedoresService.saveProveedores(this.provee).subscribe({
      next: (v: any) => [this.provee = v,this.edit = false ],
      error: (e: any) => console.error(e),
      complete: () => ( this.getMP())
    })
  }

  getMP() {
    this.ProveedoresService.getProveedoreslist().subscribe({
      next: (v: any) => this.proveedoresArr = v,
      error: (e: any) => console.error(e),
      complete: () => console.info('complete')
      
    })
  }

  deleteMP(id: any) {
    this.ProveedoresService.deleteProveedores(id).subscribe({
      next: (v: any) => [console.log(v),console.log(`se esta eliminando el elemento ${id}`)],
      error: (e: any) => console.error(e),
      complete: () => this.getMP(),

    })

  }
  get_MP(id : string) {
    this.ProveedoresService.getProveedores(id).subscribe({
      next: (v: any) => [[this.provee] = v, this.edit = true, console.log(id)],
      error: (e: any) => console.error(e),
      complete: () => console.log('get proveedores complete'+id)
    })


  }

  updateMP(id: any){
    this.ProveedoresService.updateProveedores(id,this.provee).subscribe({
      next: (v: any) => [this.provee, console.log(v), console.log([this.provee], this.provee), console.log(id)],
      error: (e: any) => console.error(e),
      complete: () => [this.getMP()]      
    })
     
     
  }

  reset(){
    this.provee.id= 0;
    this.provee.NombreApellido='';
    this.provee.Cedula='';
    this.provee.NumeroCelular='';
    this.provee.CorreoElectronico='';
    this.provee.Direccion='';
    this.provee.NombreEmpresa='';
    this.provee.TelefonoEmpresa='';
    this.provee.DireccionEmpresa='';
    this.provee.CorreoEmpresa='';
  }
 
}
