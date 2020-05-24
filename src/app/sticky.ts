const defaultStyles:string[] = ['position:fixed','z-index:1000','left:0','right:0','top:0','opacity:1','width:100%']
export class Sticky {
  private element!: HTMLElement;
  private toggleAttr!: string;
  private stickyStyles!: string[];
  private computedStyles!: string;
  constructor() {

  }

  public add(selectorName: string = '[data-fixed]', styles: string[] = []) {
    this.element = document.querySelector(selectorName) as HTMLElement;
    this.toggleAttr = this.element.getAttribute('data-toggle') as string;
    this.stickyStyles = ([...defaultStyles, ...styles]);
    this.computedStyles = this.stickyStyles.toString().replace(/,/g,';');
    // and then make each element do fixed on scroll
    window.addEventListener("scroll", () =>{
    this.bootSticky();
    });
    window.addEventListener("load", () =>{
    this.bootSticky();
    });
  }


  protected bootSticky() {
  const triggerSticky:boolean = window.pageYOffset > Number(this.element.getAttribute("data-fixed"));
  if(this.toggleAttr) {
    (triggerSticky) ?
    this.element.classList.add(this.toggleAttr) :
    this.element.classList.remove(this.toggleAttr);
  } else {
    (triggerSticky) ?
    this.element.setAttribute("style", this.computedStyles) :
    this.element.removeAttribute("style");
  }
  }
}
