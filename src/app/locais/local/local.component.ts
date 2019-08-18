import { Component, OnInit, ɵConsole } from '@angular/core';
import { Locais } from 'src/app/models/locais';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { 
    

  }

  ngOnInit() {
    

  }

  local = new Locais();
 
  options= {
    types: ['geocode'],
    componentRestrictions: { country: 'BR'},
    location: [-22.921712, -43.449187],
    radius: 70000
  }

  public handleAddressChange(address: any) {
  
    this.local.rua = address.address_components[0].short_name;
    this.local.bairro = address.address_components[1].short_name;
    this.local.cidade = address.address_components[2].short_name;
    this.local.estado = address.address_components[3].short_name;
    this.local.pais = address.address_components[4].short_name;
    
    console.log(this.local);
 
  }

  


}
