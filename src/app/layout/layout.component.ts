import { Component } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';



interface IInput {
  name: string,
  value: string
}

interface ISearchArray  {
  button: string,
  ngif: string,
  ngifValue: boolean,
  input: IInput[],
  in?: string
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ToolbarComponent, RouterModule, CommonModule, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  rot: boolean = false;
  def: boolean = true;
  
  angularSearchArray: ISearchArray[] = [
    {
      button: 'observable',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'What is Observable', value: ''},
        { name: 'RXJS',  value: ''},
        { name: 'The difference between Promise', value: ''},
        { name: 'How to create', value: ''},
        { name: 'Error & Completion of Observable', value: ''},
        { name: 'Different ways of Creating Observable', value: ''},
        { name:  'Understanding Operators of RxJS', value: ''},
        { name:  'Unsubscribe to an Observable', value: ''}, 
      ]
    },
    {
      button: 'routing',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'id Route parameter', value: ''},
        { name: 'Passing Query Parameters to Route',  value: ''},
        { name: 'Passing Fragments to Route', value: ''}
      ]
    },
    {
      button: 'Router guard',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'What is Router Guard', value: ''},
        { name: 'How to create',  value: ''},
        { name: 'CanActivate Route Guard',  value: ''},
        { name: 'CanDeactivate Route Guard',  value: ''},
        { name: 'Resolve Route Guard',  value: ''}
      ]
    },
    {
      button: 'Navigation events',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'Navigation events', value: ''}
      ],
      in: 'navigation events'
    },
    {
      button: 'Pipes',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'pipes', value: ''},
        { name: 'how to create own pipe', value: ''},
        { name: 'creating FILTER pipe', value: ''},
        { name: 'pure pipe', value: ''},
        { name: 'impure pipe', value: ''},
        { name: 'aysnc pipe', value: ''}
      ]
    },
    {
      button: 'Data Filtering',
      ngif: 'obs',
      ngifValue: false,
      in: 'data filtering',

      input: [
        { name: 'data filtering', value: ''},
      ]
    },
    {
      button: 'Forms',
      ngif: 'obs',
      ngifValue: false,
      input: [
        { name: 'forms in angular', value: ''},
        { name: 'driven template form validation', value: ''},
        { name: 'form control group in template driven form', value: ''},
        { name: 'radio button in template driven form', value: ''},
        { name: 'set and patchValue template driven', value: ''},
        { name: 'retrieving form data and reseting form', value: ''},

        { name: 'reactive forms', value: ''},
      ]
    }
  ] 
  jsSearchArray: ISearchArray[] = [
    {
      button: 'Local Storrage',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: 'What is local storrage', value: ''},
        { name: 'Nuances local storrage', value: ''},
        { name: 'Storage event', value: ''},
      ]
    }
  ]
  ang16SearchArray: ISearchArray[] = [
    {
      button: '01/Introduction',
      ngif: 'obs',
      ngifValue: false,
      in: '01/introduction',
      input:[
        { name: 'Introduction', value: ''},
      ]
    },
    {
      button: '04/Structure',
      ngif: 'obs',
      ngifValue: false,
      in: '04/structure',
      input:[
        { name: 'structure', value: ''},
      ]
    },
    {
      button: '05/Bootstrapping Angular Application',
      ngif: 'obs',
      ngifValue: false,
      in: '05/bootstrapping angular application',
      input:[
        { name: 'bootstrapping angular application', value: ''},
      ]
    },
    {
      button: '06/What is TypeScript',
      ngif: 'obs',
      ngifValue: false,
      in: '06/W hat is TypeScript',
      input:[
        { name: 'W hat is TypeScript', value: ''},
      ]
    },
    {
      button: '07/What is a Component',
      ngif: 'obs',
      ngifValue: false,
      in: '07/What is a Component',
      input:[
        { name: 'What is a Component', value: ''},
      ]
    },
    {
      button: '13/Types of Component Selector',
      ngif: 'obs',
      ngifValue: false,
      in: '13/Types of Component Selector',
      input:[
        { name: 'Types of Component Selector', value: ''},
      ]
    },
    {
      button: '14/What is Data Binding',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '14/what is data binding', value: ''},
        { name: '15/string interpolation', value: ''},
        { name: '16/property binding', value: ''},
        { name: '17/event binding', value: ''},
        { name: '18/two way data binding', value: ''},
      ]
    },
    {
      button: 'Directives',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '19/understanding directives', value: ''},
        { name: 'directive decorator', value: ''},
      ]
    },
    {
      button: '29/Template Reference Variable',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '29/template reference variable', value: ''}
      ]
    },
    {
      button: '31/ViewChild',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '31/ViewChild', value: ''},
        { name: '32/ViewChildren', value: ''},
      ]
    },
    {
      button: '33/ng-template',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '33/ng-template', value: ''},
        { name: '34/ng-content', value: ''},
      ]
    },
    {
      button: '36/ContentChild',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '36/ContentChild', value: ''},
        { name: '37/ContentChildren', value: ''},
      ]
    },
    {
      button: '38/Component Initialization',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '38/Component Initialization', value: ''}, 
        { name: '39/ngOnChanges', value: ''},
        { name: '40/ngOnInit', value: ''},
        { name: '41/ngDoCheck', value: ''},
        { name: '42/ngAfterContentInit', value: ''},
        { name: '43/ngAfterContentChecked', value: ''},
        { name: '44/ngAfterViewInit', value: ''},
        { name: '45/ngAfterViewChecked', value: ''},
        { name: '46/ngOnDestroy', value: ''}
      ]
    },
    {
      button: '47/Creating own directive',
      ngif: 'obs',
      ngifValue: false,
      in: '47/creating-own-directive',
      input:[
        { name: '47/creating-own-directive', value: ''},
      ]
    },
    {
      button: '48/Renderer2',
      ngif: 'obs',
      ngifValue: false,
      in: '48/Renderer2',
      input:[
        { name: '48/Renderer2', value: ''},
      ]
    },
    {
      button: '49/@HostListner',
      ngif: 'obs',
      ngifValue: false,
      in: '49/@HostListner',
      input:[
        { name: '49/@HostListner', value: ''},
      ]
    },
    {
      button: '50/@HostBinding',
      ngif: 'obs',
      ngifValue: false,
      in: '50/@HostBinding',
      input:[
        { name: '50/@HostBinding', value: ''},
      ]
    },
    {
      button: '59/What is View Encapsulation',
      ngif: 'obs',
      ngifValue: false,
      in: '59/What is View Encapsulation',
      input:[
        { name: '59/What is View Encapsulation', value: ''},
      ]
    },
    {
      button: '60/Service',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '60/Service', value: ''}, 
      ]
    },
    {
      button: '62/Dependency Injection',
      ngif: 'obs',
      ngifValue: false,
      input:[
        { name: '62/Dependency Injection', value: ''}, 
      ]
    },
  ]
  searchArray: ISearchArray[] = this.angularSearchArray;
        
  createValue(arr: ISearchArray, name: string){
    console.log('Arr');
    console.log(arr);
    console.log('-');
    console.log(arr);
    
    console.log('ARR.BUTTON');
    console.log(arr.button);
    
    
    if(arr.button == 'observable'){
      arr.input.forEach((elem) => {
        elem.value = 'ang' + '/' + arr.button + '/' + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        
      })
    } else if(arr.button == 'Router guard'){
      arr.input.forEach((elem) => {
        elem.value = 'ang' + '/' + 'router-guard' + '/' + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        
      }) 
    } else if(arr.button == 'routing'){
      arr.input.forEach((elem) => {
        elem.value = 'ang' + '/' + arr.button + '/' + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        
      })
    } else if (name == 'js'){
      if(arr.button == 'Local Storrage'){
        arr.input.forEach((elem) => {
          elem.value = name + "/" + "local-storage" + '/' + elem.name.toLowerCase()
          .replaceAll(' ', '-');
          
        })
      }
      
    } else if (name == 'ang'){
      arr.input.forEach((elem)=>{
        elem.value = name + '/' + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        console.log(elem.value);
        
      })
    } else if (name == 'in'){
      arr.in = 'ang' + '/' + arr.in?.toLowerCase().replaceAll(' ', '-');
    } else if (name == 'ang16'){
      if(arr.in){
        arr.in = 'ang16' + '/' + arr.in?.toLowerCase().replaceAll(' ', '-');
      }
    } 


    else if(name  == 'ang116'){
      arr.input.forEach((elem) => {
        elem.value = 'ang16' + '/'  + elem.name.toLowerCase()
        .replaceAll(' ', '-');
        
      })
    }
    else if(name == 'ang116-in'){
      arr.in = 'ang16' + '/' + arr.in?.toLowerCase().replaceAll(' ', '-');

    }
    
  } 
  ngOnInit() {
    this.loc() 
    
    this.createValue(this.angularSearchArray[0], 'observable');
    this.createValue(this.angularSearchArray[1], 'routing');
    this.createValue(this.angularSearchArray[2], 'Router guard');
    this.createValue(this.angularSearchArray[3], 'in');
    this.createValue(this.angularSearchArray[4], 'ang');
    this.createValue(this.angularSearchArray[5], 'in');
    this.createValue(this.angularSearchArray[6], 'ang');
    this.createValue(this.jsSearchArray[0], 'js');
    this.createValue(this.ang16SearchArray[0], 'ang16');
    this.createValue(this.ang16SearchArray[1], 'ang16');
    this.createValue(this.ang16SearchArray[2], 'ang16');
    this.createValue(this.ang16SearchArray[3], 'ang16');
    this.createValue(this.ang16SearchArray[4], 'ang16');
    this.createValue(this.ang16SearchArray[5], 'ang16');
    this.createValue(this.ang16SearchArray[6], 'ang116');
    this.createValue(this.ang16SearchArray[7], 'ang116');
    this.createValue(this.ang16SearchArray[8], 'ang116');
    this.createValue(this.ang16SearchArray[9], 'ang116');
    this.createValue(this.ang16SearchArray[10], 'ang116');
    this.createValue(this.ang16SearchArray[11], 'ang116');
    this.createValue(this.ang16SearchArray[12], 'ang116');
    this.createValue(this.ang16SearchArray[13], 'ang116-in');
    this.createValue(this.ang16SearchArray[14], 'ang116-in');
    this.createValue(this.ang16SearchArray[15], 'ang116-in');
    this.createValue(this.ang16SearchArray[16], 'ang116-in');
    this.createValue(this.ang16SearchArray[17], 'ang116-in');
    this.createValue(this.ang16SearchArray[18], 'ang116');
    this.createValue(this.ang16SearchArray[19], 'ang116');
    
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    console.log(this.ang16SearchArray[13])
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    if (location.pathname.includes('/l/ang16')){
      this.searchArray = this.ang16SearchArray;
    } else if (location.pathname.includes('/l/js')){
      this.searchArray = this.jsSearchArray;
    } else if(location.pathname.includes('/l/ang')) {
      this.searchArray = this.angularSearchArray;
    }
  }
  change(text: string){
    console.log('TEXT*-----------------');
    
    console.log(text);
    if(text == 'angular') {
      this.searchArray = this.angularSearchArray;
    } else if (text == 'js'){
      this.searchArray = this.jsSearchArray;
    } else if (text == 'ang16'){
      this.searchArray = this.ang16SearchArray;
    }
  }
  loc(){
    if (location.pathname == '/') {
      this.searchArray = [
        // {
        //   button: 'observable',
        //   ngif: true,
        //   input:[ 'What is Observable', 'RXJS', 'The difference between Promise',
        //   'How to create', 'Error & Completion of Observable',
        //   'Different ways of Creating Observable', 'Understanding Operators of RxJS',
        //   'Unsubscribe to an Observable']
        // },
        // {
        //   val: 'routing'
        // },
        // {
        //   val: 'none'
        // }
      ];
    }
  }
  button(){
    this.rot = !this.rot;
    this.def = !this.def;
  }
}
