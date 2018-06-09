
    class youtube {
    constructor(   
     protected videoTitle: string,
   
     protected videoDescription: string,
   
     protected videoDuration: string,
   
     protected videoPublisher: string,
   
     public videoViews: number,
   
     public videoLikes: number,
   
     public videoDislikes: number,
    
     public videoShare : number,
      public catagory ?:string
        
    ) {
     this.videoTitle = videoTitle;
   
     this.videoDescription = videoDescription;
   
     this.videoDuration = videoDuration;
   
     this.videoPublisher = videoPublisher;
     this.videoViews = videoViews;
   
     this.videoLikes = videoLikes;
   
     this.videoDislikes = videoDislikes;
   
     this.videoShare = videoShare; 
     this.catagory=catagory;
    }

    video_Title = () => {
     console.log("Video Tile:" + this.videoTitle);
    }
    video_Description = () => {
     console.log("about video:" + this.videoDescription);
    }
    video_Duration = () => {
     console.log("Duration:" + this.videoDuration);
    }
    video_Publisher = () => {
     console.log("Publisher:" + this.videoPublisher);
    }
    video_Views = () => {
     console.log("Number of views:" + this.videoViews);
    }
    video_Likes = () => {
     console.log("Likes:" + this.videoLikes);
    }
    video_Dislikes = () => {
     console.log("Dislikes:" + this.videoDislikes);
    }
    video_Share = () => {
   
     console.log("Number of shares:"+this.videoShare);
    }
    catagorys=()=>{
        console.log("catagory:"+this.catagory);
    }
   
   }
   let video1 = new youtube("jackie", "a funn love video song", "20minute", "indian", 20000, 2234, 7, 15,"animation");
   video1.video_Title();
   video1.video_Description();
   video1.video_Duration();   
   video1.video_Publisher();
   video1.video_Views();   
   video1.video_Likes();
   video1.video_Dislikes();
   video1.video_Share();
   video1.catagorys();

 