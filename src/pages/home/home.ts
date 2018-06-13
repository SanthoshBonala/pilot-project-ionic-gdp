import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DemoPage } from '../demo/demo';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = "";
  password: string = "";
  constructor(public modalCtrl: ModalController, public navctrl: NavController, private http: HTTP) {

  }
  
  clicked(){
    
    let headers = {
      'Content-Type': 'application/json'
    };

    let body = {
      username: this.username,
      password: this.password
    };

    // this.http.post('https://jsonplaceholder.typicode.com/posts/1', body, headers)
    //   .then((data) => {

    //     console.log(data)
    //     const profileModal = this.modalCtrl.create(DemoPage, { userId: 8675309 });
    //     profileModal.present();

    //   })
    //   .catch( (error) => {

    //    console.log(error)

    //   });  .then((data) => {

    //     console.log(data)
    //     const profileModal = this.modalCtrl.create(DemoPage, { userId: 8675309 });
    //     profileModal.present();

    //   })
    //   .catch( (error) => {

    //    console.log(error)

    //   });

    const profileModal = this.modalCtrl.create(DemoPage, { userId: 8675309 });
      profileModal.present();
    
  
 
  }


}