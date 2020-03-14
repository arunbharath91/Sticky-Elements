
export class Sticky {
  private element!: HTMLElement;
  private toggleAttr!: string;
  private stickyStyles: string[] = ['position:fixed','z-index:1000','left:0','right:0','top:0','opacity:1','width:100%'];
  constructor() {

  }

  add(selectorName: string = '[data-fixed]', styles?: string[]) {
    this.element = document.querySelector(selectorName) as HTMLElement;
    this.toggleAttr = this.element.getAttribute('data-toggle') as string;
    (styles) ? this.stickyStyles = styles: null;
    // and then make each element do fixed on scroll
    window.addEventListener("scroll", () =>{
    this.bootSticky();
    });
    window.addEventListener("load", () =>{
    this.bootSticky();
    });
  }


  bootSticky(target: HTMLElement = this.element, toggleAttr: any = this.toggleAttr) {

  if(window.pageYOffset > Number(target.getAttribute("data-fixed")) && !(toggleAttr)){
  target.setAttribute("style", this.stickyStyles.toString().replace(/,/g,';'));
  } else {
  target.removeAttribute("style");
  }

  if(window.pageYOffset > Number(target.getAttribute("data-fixed")) && toggleAttr){
  target.classList.add(toggleAttr);
  } else{
  target.classList.remove(toggleAttr);
  }

  }
}
