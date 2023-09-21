import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  habilitacionCuadro = false;
  usuRegistrado = false;
  textoRegisto = ""


  setusuarioRegistrado(ev: Event) {

    if (((<HTMLInputElement>ev.target).value) == "si") {
      this.textoRegisto = "Si hay registos";
    } else {
      this.textoRegisto = "No hay registos";
    }
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Valor del input:', inputValue);
  }


  onMouseOver() {
    console.log('Mouse sobre el elemento');
  }




}