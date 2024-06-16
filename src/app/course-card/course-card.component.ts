import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../course.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input({ required: true }) index!: number;

  @Output() view = new EventEmitter<Course>();
  onViewCourse() {
    this.view.emit(this.course);
  }
}
