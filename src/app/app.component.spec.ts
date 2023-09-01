import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  //El ComponentFixture es una instancia de un componente que se puede utilizar para realizar pruebas en la vista y el comportamiento del componente.
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  //Se ejecuta antes del testeo
  beforeEach(() => {
    //El TestBed es una clase que proporciona métodos para crear componentes y servicios para pruebas unitarias. 
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  //It es una función que hace un testeo particular
  it('should have a title', () => {
    expect(component.title).toEqual('sushi_web');
  });
});