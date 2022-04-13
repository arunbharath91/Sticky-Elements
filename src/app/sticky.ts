
export class Sticky {
  private element!: HTMLElement;
  private stickyPostion!: number;
  private dataToggle!: string;
  private breakpointUnit!: string;
  constructor(selectorName: string = '[data-fixed]') {
    this.add(selectorName);
  }


  private add(selectorName: string) {
    this.element = document.querySelector(selectorName) as HTMLElement;
    this.stickyPostion = Number(this.element.getAttribute("data-fixed"));
    // you can data-toggle if u want toggle between class
    this.dataToggle = this.element.getAttribute('data-toggle') as string;
    this.breakpointUnit = this.element.getAttribute('data-breakpoint') as string;
    // and then make each element do fixed on scroll
    window.addEventListener("scroll", (e) => {
      this.bootSticky(e);
    });
    window.addEventListener("load", (e) => {
      this.bootSticky(e);
    });
  }


  protected bootSticky(e: Event) {
    if (this.breakpointUnit && window.matchMedia(`(max-width: ${this.breakpointUnit})`).matches) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (this.dataToggle) {
      const triggerSticky: boolean = window.pageYOffset > Number(this.stickyPostion);
      (triggerSticky) ?
        this.element.classList.add(this.dataToggle) :
        this.element.classList.remove(this.dataToggle);
    }
  }
}
