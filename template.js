container_elem = document.getElementById("container");
container_child = container_elem.children;

flCollectAddInfo = false;
addInfoCollector = new Array();
addInfoIdx = 0;
for(idx = 0; idx < container_child.length; idx++){
    el = container_child[idx];
    //if we are in collection mode collect everything but <HR/>
    if(flCollectAddInfo){
      if(el.tagName == "HR"){
          //If we are in collection mode and we meet another HR then
          //exit collection mode and create info div
          flCollectAddInfo = false;
          _div = document.createElement("div");
          _div.id = addInfoIdx++;
          _div.className = "addInfoContainer";
          _div.style["visibility"] = "hidden";
          for(i = 0; i < addInfoCollector.length;i++){
            _div.appendChild(addInfoCollector[i]);
          }
          addInfoCollector = new Array();
          document.body.appendChild(_div);
          el.remove();
          idx--;

      }else {
          //else collect info
          addInfoCollector.push(el);
          el.remove();
          idx--;
      }

    }
    //if we meet header then replace it with div block
    else if(el.tagName === "H2"){
      container_elem.insertBefore(document.createElement("div"), el).className = "block";
      el.previousElementSibling.appendChild(el);
    }
    //If we meet HR and we arent in collection mode
    //then start collection mode
    else if(el.tagName === "HR"){
      //Dont know why but checking HR's tag name turns it into block
      //So we need to check if it has any children and add them to array
      for(i = 0; i < el.children; i++){
        addInfoCollector.push(el.children[i]);
      }
      //previous element is div, we need to add onclick to its first child

      blockHeader = el.previousElementSibling.firstElementChild;
      let infoIdx = addInfoIdx;

      blockHeader.className += " clickable"
      blockHeader.innerHTML += "&#10040;";
      blockHeader.onclick = function(ev) {
        infoDiv = document.getElementById(infoIdx);
        infoDiv.style.visibility = "visible";
        ev.stopPropagation();
      }

      //remove element
      el.remove();
      //change flag to add all new elements to array
      flCollectAddInfo = true;
      //we now have one element less to iterate over
      idx--;
    }
    //else if it's not a header or block append it to its previousSibling
    else if ((el.tagName !== "H1" || flCollectAddInfo) && el.tagName !== "DIV") {
      el.previousElementSibling.appendChild(el);
      idx--;
    }
}

document.body.onclick = function(ev) {
  for(i = 0; i < addInfoIdx; i++){
    _div = document.getElementById(i);
    _div.style["visibility"] = "hidden";
  }
}
