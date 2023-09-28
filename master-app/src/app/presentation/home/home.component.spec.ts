import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [Router],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should add a task to the tasks array', () => {
  //   component.newTask = 'New Task';
  //   component.addTask();
  //   expect(component.tasks).toContain('New Task');
  // });

  // it('should not add an empty task to the tasks array', () => {
  //   component.newTask = '';
  //   component.addTask();
  //   expect(component.tasks).toEqual(['Dayli', 'Planig', 'review', 'Dayli', 'Planig', 'review']);
  // });

  // it('should remove a task from the tasks array', () => {
  //   component.tasks = ['Task 1', 'Task 2', 'Task 3'];
  //   component.removeTask(1);
  //   expect(component.tasks).toEqual(['Task 1', 'Task 3']);
  // });

  // it('should navigate to details', () => {
  //   spyOn(router, 'navigateByUrl');
  //   component.navigateToDetails('Task Details');
  //   expect(router.navigateByUrl).toHaveBeenCalledWith('/details/Task Details');
  // });
});
