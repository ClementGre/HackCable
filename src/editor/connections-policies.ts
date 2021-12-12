import draw2d from "draw2d";

export class VertexClickConnectionPolicy extends draw2d.policy.connection.ClickConnectionCreatePolicy{
    createConnection(){
        const connection = super.createConnection();
        if(connection.getRouter() instanceof draw2d.layout.connection.VertexRouter){
            // The vertex order is reversed when using hybrid ports (bug from Draw2D)
            connection.setVertices(this.vertices.reverse())
        }else{
            // When there is only 2 vertices, superclass is using a DirectRouter.
            connection.setRouter(new draw2d.layout.connection.VertexRouter());
        }
        return connection
    }
}
class VertexDragConnectionPolicy extends draw2d.policy.connection.DragConnectionCreatePolicy{
    createConnection(){
        return new draw2d.Connection({router: new draw2d.layout.connection.VertexRouter()})
    }
}

/*let createOrthogonalConnection = function(){
    //return new draw2d.Connection({router: new draw2d.layout.connection.CircuitConnectionRouter()});
    return new draw2d.Connection({router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter()});
};*/

export const connectionsPolicy = new draw2d.policy.connection.ComposedConnectionCreatePolicy([
    new VertexDragConnectionPolicy(),
    new VertexClickConnectionPolicy()
    //new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({createConnection: createOrthogonalConnection})
])