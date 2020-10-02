//WebGLStudio kodas, aukštyn ir žemyn judančio objekto paprastai animacijai sukurti.

defined: component, node, scene, transform, globals
this.onStart = function()
{
}

public var startY = 30;

this.onUpdate = function(dt)
{
 node.transform.y = this.startY + (Math.sin( scene.time ) * 40); 
 
 node.scene.refresh();
}
