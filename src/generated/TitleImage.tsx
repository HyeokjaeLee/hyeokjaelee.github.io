
  import { StaticImage } from 'gatsby-plugin-image';
  
  interface TitleImageProps {
    slug: string;
    size: number;
    className?: string;
    imgClassName?: string;
  }
  
  export const TitleImage = (props: TitleImageProps) => {
    return {
  "/blog-remake-review1/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review1/nextjs.png"
          alt="/blog-remake-review1/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review1/nextjs.png"
          alt="/blog-remake-review1/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review1/nextjs.png"
          alt="/blog-remake-review1/"
          height={600}
        />
      )}[props.size],"/blog-remake-review2/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review2/gatsby.png"
          alt="/blog-remake-review2/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review2/gatsby.png"
          alt="/blog-remake-review2/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/blog-remake-review2/gatsby.png"
          alt="/blog-remake-review2/"
          height={600}
        />
      )}[props.size],"/briend/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/briend/briend.jpg"
          alt="/briend/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/briend/briend.jpg"
          alt="/briend/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/briend/briend.jpg"
          alt="/briend/"
          height={600}
        />
      )}[props.size],"/components-styling/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/components-styling/react.png"
          alt="/components-styling/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/components-styling/react.png"
          alt="/components-styling/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/components-styling/react.png"
          alt="/components-styling/"
          height={600}
        />
      )}[props.size],"/copilot-review/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/copilot-review/copilot.png"
          alt="/copilot-review/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/copilot-review/copilot.png"
          alt="/copilot-review/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/copilot-review/copilot.png"
          alt="/copilot-review/"
          height={600}
        />
      )}[props.size],"/covid-19-api-update/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/covid-19-api-update/covid-19-api.png"
          alt="/covid-19-api-update/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/covid-19-api-update/covid-19-api.png"
          alt="/covid-19-api-update/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/covid-19-api-update/covid-19-api.png"
          alt="/covid-19-api-update/"
          height={600}
        />
      )}[props.size],"/employment-memoirs/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs/"
          height={600}
        />
      )}[props.size],"/digital-nomad-in-chiang-mai/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-chiang-mai/yellow.jpg"
          alt="/digital-nomad-in-chiang-mai/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-chiang-mai/yellow.jpg"
          alt="/digital-nomad-in-chiang-mai/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-chiang-mai/yellow.jpg"
          alt="/digital-nomad-in-chiang-mai/"
          height={600}
        />
      )}[props.size],"/digital-nomad-in-jeju/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-jeju/jeju-cafe.jpeg"
          alt="/digital-nomad-in-jeju/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-jeju/jeju-cafe.jpeg"
          alt="/digital-nomad-in-jeju/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/digital-nomad-in-jeju/jeju-cafe.jpeg"
          alt="/digital-nomad-in-jeju/"
          height={600}
        />
      )}[props.size],"/employment-memoirs2/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs2/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs2/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs2/"
          height={600}
        />
      )}[props.size],"/good-commit-message/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c061905-eb53-4a8c-a277-6519e1ce2a49"
          alt="/good-commit-message/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c061905-eb53-4a8c-a277-6519e1ce2a49"
          alt="/good-commit-message/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c061905-eb53-4a8c-a277-6519e1ce2a49"
          alt="/good-commit-message/"
          height={600}
        />
      )}[props.size],"/gititle-project/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png"
          alt="/gititle-project/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png"
          alt="/gititle-project/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png"
          alt="/gititle-project/"
          height={600}
        />
      )}[props.size],"/nodejs-crawling/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a"
          alt="/nodejs-crawling/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a"
          alt="/nodejs-crawling/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a"
          alt="/nodejs-crawling/"
          height={600}
        />
      )}[props.size],"/knu-lms-scheduler/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/5ce48afd-9e2c-47c0-82ed-f9deac8556f6"
          alt="/knu-lms-scheduler/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/5ce48afd-9e2c-47c0-82ed-f9deac8556f6"
          alt="/knu-lms-scheduler/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/5ce48afd-9e2c-47c0-82ed-f9deac8556f6"
          alt="/knu-lms-scheduler/"
          height={600}
        />
      )}[props.size],"/react-component-concept/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3"
          alt="/react-component-concept/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3"
          alt="/react-component-concept/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3"
          alt="/react-component-concept/"
          height={600}
        />
      )}[props.size],"/nest-js/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/nest-js/nest.jpg"
          alt="/nest-js/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/nest-js/nest.jpg"
          alt="/nest-js/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="../images/contents/nest-js/nest.jpg"
          alt="/nest-js/"
          height={600}
        />
      )}[props.size],"/react-atomic/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3"
          alt="/react-atomic/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3"
          alt="/react-atomic/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3"
          alt="/react-atomic/"
          height={600}
        />
      )}[props.size],"/react-design-pattern/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b"
          alt="/react-design-pattern/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b"
          alt="/react-design-pattern/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b"
          alt="/react-design-pattern/"
          height={600}
        />
      )}[props.size],"/install-private-packages-with-yarn-berry/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/install-private-packages-with-yarn-berry/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/install-private-packages-with-yarn-berry/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/install-private-packages-with-yarn-berry/"
          height={600}
        />
      )}[props.size],"/spawn-node-gyp-enoent/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/spawn-node-gyp-enoent/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/spawn-node-gyp-enoent/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/spawn-node-gyp-enoent/"
          height={600}
        />
      )}[props.size],"/typescript-express-server/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc"
          alt="/typescript-express-server/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc"
          alt="/typescript-express-server/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc"
          alt="/typescript-express-server/"
          height={600}
        />
      )}[props.size],"/sass-compiler/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23"
          alt="/sass-compiler/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23"
          alt="/sass-compiler/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23"
          alt="/sass-compiler/"
          height={600}
        />
      )}[props.size],"/korea-webtoon-api-update/": {100: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/99b6a086-1283-4088-81cc-4cb857c3ccdb"
          alt="/korea-webtoon-api-update/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/99b6a086-1283-4088-81cc-4cb857c3ccdb"
          alt="/korea-webtoon-api-update/"
          height={200}
        />
      ),600: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/99b6a086-1283-4088-81cc-4cb857c3ccdb"
          alt="/korea-webtoon-api-update/"
          height={600}
        />
      )}[props.size],}[props.slug]}