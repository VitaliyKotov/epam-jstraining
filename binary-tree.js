'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
		this.nodesCounter = 0;
	}

	insert(data) {
		this.nodesCounter++;

		var root = this.root;
			if(!root) {
				this.root = new Node(data);
				return;
			};

		var currentNode = root;
		var NewNode = new Node (data);


		while(currentNode){
			if(NewNode.data < currentNode.data){

				if(!currentNode.left){
					currentNode.left = NewNode;
					break;
				}
				currentNode = currentNode.left;

			} else {

				if(NewNode.data > currentNode.data){
					if(!currentNode.right){
						currentNode.right = NewNode;
						break;
					};
				} 
				currentNode = currentNode.right;

			};

		};
	
	}

	contains(data) {
		var currentNode = this.root; 
		
    	while (currentNode.data != data){ 
	        if (data < currentNode.data) { 
	            currentNode = currentNode.left; 
	        } else { 
	            currentNode = currentNode.right; 
	        }; 
	        
	        if (currentNode == null) { 
            return false; 
        	};

	        }; 
        return true;
	    
	}

	remove(data) {
		this.nodesCounter--;
	}

	size() {
		return this.nodesCounter;
	}

	isEmpty() {
		if ( this.nodesCounter == 0 ) {
			return true
		} else {
			return false;
		} 
	}
}
