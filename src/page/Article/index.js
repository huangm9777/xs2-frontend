import {useParams} from 'react-router-dom';
import {request} from '@/util'
import { useEffect } from 'react';

const Article = ()=>{
  useEffect(async ()=>{
    const res = await request.post('/user/prof')
    console.log(res)
  }, [])



  // const param = useParams();
  // const id = param.id;
    return(
      <div>
        <div>Article page</div>  

          
          
      </div>
    );
}

export default Article;