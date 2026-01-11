import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            list: () => of([]),
            create: () => of({ id: 1, title: 'Test', completed: false }),
            delete: () => of({ id: 1, title: 'Test', completed: false }),
            listDeleted: () => of([])
          }
        }
      ]
    }).compileComponents();
  });

  it('アプリが生成できる', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ヒーロー見出しが表示される', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('やることを');
  });
});
