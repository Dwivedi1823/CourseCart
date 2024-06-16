import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { COURSES } from './courses';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses = COURSES;

  onViewClicked(course: Course) {
    console.log('Wants to view course ' + course.description);
  }
}
