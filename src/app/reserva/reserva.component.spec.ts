import { ReservaComponent } from './reserva.component';
import { ComponentFixture, TestBed } from "@angular/core/testing";



describe('ReservaComponent', () => {
  
  //El ComponentFixture es una instancia de un componente que se puede utilizar para realizar pruebas en la vista y el comportamiento del componente.
                                //<> = Tipo generico de en este caso ReservaComponent
  let fixture: ComponentFixture<ReservaComponent>;
  let component: ReservaComponent;

  //Se ejecuta antes del testeo
  beforeEach(() => {
    //El TestBed es una clase que proporciona métodos para crear componentes y servicios para pruebas unitarias. 
    fixture = TestBed.createComponent(ReservaComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });


  it('form invalid when empty', () => {
    //El valor de invalid en el form es true, asi que si esta vacio esperará un true
        expect(component.form.invalid).toEqual(true);
  });

  //It es una función que hace un testeo particular
  /*    TODO FIX THIS
  it('this should accept the form', () => {


    
    //Mediante el dom voy dando valor a los inputs manualmente para la funcione el test

    //Al ser inputs necesitamos pasarles el tipo generico htmlinput
    (<HTMLInputElement>document.getElementById('fecha')).value = '2022-07-25';

    (<HTMLInputElement>document.getElementById('hora')).value = '12:00';

    (<HTMLInputElement>document.getElementById('personas')).value = '4';

    (<HTMLInputElement>document.getElementById('notas')).value = 'ok';

   //Simulamos el click en el boton
    document.getElementById('submit')?.click();

    //Aquí le estoy diciendo se espera que la función doReserva devuelva algo, en este caso un string
    expect(component.doReserva).toBe('Reserva hecha correctamente.');
 
  });
     */
});