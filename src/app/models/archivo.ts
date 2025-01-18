export interface Archivo {
    nombre: string;
    tipo: string;
  }
  
  export interface Carpeta {
    nombre: string;
  }
  
  export interface RespuestaArchivosCarpetas {
    archivos: Archivo[];
    carpetas: Carpeta[];
  }
  