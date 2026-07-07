import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component';
import { AppModule } from './app.module';



describe('AppComponent', () => {

  //El ComponentFixture es una instancia de un componente que se puede utilizar para realizar pruebas en la vista y el comportamiento del componente.
                                //<> = Tipo generico de en este caso AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  //Se ejecuta antes del testeo
  beforeEach(async () => {
    //El TestBed es una clase que proporciona métodos para crear componentes y servicios para pruebas unitarias.
    //Desde Angular 19 el componente debe declararse vía su módulo para que el template resuelva router-outlet.
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  //It es una función que hace un testeo particular
  it('should have a title', () => {
    //Aquí le estoy diciendo se espera que la variable title (definida en nuestro app.ts) tenga el valor sushi_web
    expect(component.title).toEqual('sushi_web');
  });
});