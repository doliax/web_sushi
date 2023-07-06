export class Platos {
    private nombre: string | undefined;
    private descripcion: string | undefined;
    private alergenos: string | undefined;
    private precio: number | undefined;
    private img: string | undefined;
    private tipo: string | undefined;

    //Constructor vacio
    constructor(
        _nombre: string = "",
        _descripcion: string = "",
        _alergenos: string = "",
        _precio: number = 0,
        _img: string = "",
        _tipo: string = ""
      ) { //Constructor con parametros
        this.nombre = _nombre;
        this.descripcion = _descripcion;
        this.alergenos = _alergenos;
        this.precio = _precio;
        this.img = _img;
        this.tipo = _tipo;
      }

      
      public get getNombre(): string {
        //Al ser o string o undefined, devolvemos "" si es undefined
        return this.nombre || "";
      }

      public set setNombre(value: string) {
        this.nombre = value;
      }
      


      public get getDescripcion(): string {
        return this.descripcion || "";
      }

      public set setDescriptcion(value: string) {
        this.descripcion = value;
      }





      public get getAlergenos(): string {
        return this.alergenos || "";
      }
      
      public set setAlergenos(value: string) {
        this.alergenos = value;
      }




      public get getPrecio(): number {
        return this.precio || 0;
      }

      public set setPrecio(value: number) {
        this.precio = value;
      }



      public get getImg(): string {
        return this.img || "";
      }

      public set setImg(value: string) {
        this.img = value;
      }





      public get getTipo(): string {
        return this.tipo || "";
      }

      public set setTipo(value: string) {
        this.tipo = value;
      }
      
}
