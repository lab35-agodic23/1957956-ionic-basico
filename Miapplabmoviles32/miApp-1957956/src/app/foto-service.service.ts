import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './foto.model';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  constructor(plataforma: Platform) {
    this.plataforma = plataforma;
   }
   private plataforma: Platform; 
  public fotos: Foto[] = [];
  public async addNewToGallery() {    
    // Toma Foto    
    const fotoCamara = await Camera.getPhoto({      
      resultType: CameraResultType.Uri,      
      source: CameraSource.Camera,      
      quality: 100    
      });
  
      this.fotos.unshift({
        filepath: '',
        webViewPath: fotoCamara.webPath
      });
}
}
