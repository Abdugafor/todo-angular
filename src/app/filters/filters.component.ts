import { 
  Component,
  Output, 
  EventEmitter, 
  Input,
  } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent  {
  @Output() clearDoneTodos = new EventEmitter()
  @Input() todosList = []
  @Input() itemsLeft = 0

  filterActive = 'All'

  @Output() filActive = new EventEmitter()

  clearDone() { 
    this.clearDoneTodos.emit()
  }

  onClick(value) {
    const filterName = value.target.textContent
    
    this.filActive.emit(filterName)
    this.filterActive = filterName
  }

}
