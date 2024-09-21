import {useParams} from 'react-router-dom';

const Article = ()=>{
  const param = useParams();
  const id = param.id;
    return(
      <div>
        <div>Article page, id = {id}</div>  

          
          
      </div>
    );
}

export default Article;