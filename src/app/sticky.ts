
class Sticky {

  constructor(selector?: string) {
  this.registerEvents(selector);
  }

  registerEvents(selectorName: string = '[data-fixed]'){
    // grab elements as array, rather than as NodeList
    const elements = document.querySelectorAll(selectorName);
    const elementsArray: HTMLElement[] = Array.prototype.slice.call(elements);

    // and then make each element do fixed on scroll
    elementsArray.forEach((element) => {
    window.addEventListener("scroll", () =>{
    this.bootSticky(element, element.getAttribute('data-toggle'));
    });
    });
  }


  bootSticky(target: HTMLElement, toggleAttr: any) {
  let stickyStyles;

  if(window.pageYOffset > Number(target.getAttribute("data-fixed")) && !(toggleAttr)){
  stickyStyles = ['position:fixed','z-index:1000','left:0','right:0','top:0','opacity:1','width:100%'];
  target.setAttribute("style", stickyStyles.toString().replace(/,/g,';'));
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

const sticky = new Sticky();
