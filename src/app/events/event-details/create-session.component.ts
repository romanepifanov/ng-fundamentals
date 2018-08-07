import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { ISession } from '../shared/event.model'
import { restrictedWords } from "../shared/restricted-word.validator";

@Component({
  selector: 'create-session'
  ,templateUrl: './crate-session.component.html'
  ,styles: [`
  em { float: right; color: #e05c65; padding-left: 10px; }
  .form-group textarea { resize: none }
  .error input, .error select, .error textarea { background-color: #e3c3c5; }
  .error input::placeholder, .error textarea::placeholder{ color: #6e6e6e; }
  `]
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() canselAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit () {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);
    
    this.newSessionForm = new FormGroup({
      name: this.name
      ,presenter: this.presenter
      ,duration: this.duration
      ,level: this.level
      ,abstract: this.abstract
    })
  }

  cansel() {
    this.canselAddSession.emit();
  }

  saveSession(faromValues) {
    let session:ISession = {  
      id: undefined,
      name: faromValues.name,
      duration: +faromValues.duration,
      level: faromValues.level,
      presenter: faromValues.presenter,
      abstract: faromValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }
}