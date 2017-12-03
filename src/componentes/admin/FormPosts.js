import React, { Component } from 'react';

class FormPosts extends Component {
  render() {
    return (
        <div className="p-2 w-50 m-0 m-auto">
           <form>
                <div className="form-group">
                    <label for="title_post">Título</label>
                    <input type="text" className="form-control" id="title_post"/>
                    
                </div>
                <div className="form-group">
                    <label for="body_post">Corpo do Post</label>
                    <input type="text-area" className="form-control" id="body_post"/>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    );
  }
}

export default FormPosts;