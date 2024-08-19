
  import { StaticImage } from 'gatsby-plugin-image';
  
  interface TitleImageProps {
    slug: string;
    size: number;
    className?: string;
  }
  
  export const TitleImage = (props: TitleImageProps) => {
    return {
  "/blog-remake-review2/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/d3252f4e-2126-4875-aa37-f38cf2f16633"
          alt="/blog-remake-review2/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/d3252f4e-2126-4875-aa37-f38cf2f16633"
          alt="/blog-remake-review2/"
          height={200}
        />
      )}[props.size],"/blog-remake-review1/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/e5f6dadc-0b6d-4eb7-b382-3a55b3a2d977"
          alt="/blog-remake-review1/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/e5f6dadc-0b6d-4eb7-b382-3a55b3a2d977"
          alt="/blog-remake-review1/"
          height={200}
        />
      )}[props.size],"/components-styling/": {100: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/272626876-941eb55c-5977-4a96-896a-488d464b75b7.png"
          alt="/components-styling/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/272626876-941eb55c-5977-4a96-896a-488d464b75b7.png"
          alt="/components-styling/"
          height={200}
        />
      )}[props.size],"/briend/": {100: (
        <StaticImage
          className={props.className}
          src="../images/contents/briend/briend.jpg"
          alt="/briend/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="../images/contents/briend/briend.jpg"
          alt="/briend/"
          height={200}
        />
      )}[props.size],"/covid-19-api-update/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b57ba86c-cd98-4e5d-a4a0-bfd89107dd96"
          alt="/covid-19-api-update/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b57ba86c-cd98-4e5d-a4a0-bfd89107dd96"
          alt="/covid-19-api-update/"
          height={200}
        />
      )}[props.size],"/copilot-review/": {100: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/131648745-0ab54f7e-d004-434e-89d8-d401b8719f51.png"
          alt="/copilot-review/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/131648745-0ab54f7e-d004-434e-89d8-d401b8719f51.png"
          alt="/copilot-review/"
          height={200}
        />
      )}[props.size],"/digital-nomad-in-chiang-mai/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/4624a012-2823-464f-ac27-16d1c43bbde6"
          alt="/digital-nomad-in-chiang-mai/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/4624a012-2823-464f-ac27-16d1c43bbde6"
          alt="/digital-nomad-in-chiang-mai/"
          height={200}
        />
      )}[props.size],"/digital-nomad-in-jeju/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c83a3da-da01-42c5-a558-810e8c263f8e"
          alt="/digital-nomad-in-jeju/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c83a3da-da01-42c5-a558-810e8c263f8e"
          alt="/digital-nomad-in-jeju/"
          height={200}
        />
      )}[props.size],"/employment-memoirs/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs/"
          height={200}
        />
      )}[props.size],"/gititle-project/": {100: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png"
          alt="/gititle-project/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png"
          alt="/gititle-project/"
          height={200}
        />
      )}[props.size],"/employment-memoirs2/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs2/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c8375f1e-6bda-4de3-ab2c-55db8719e709"
          alt="/employment-memoirs2/"
          height={200}
        />
      )}[props.size],"/good-commit-message/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c061905-eb53-4a8c-a277-6519e1ce2a49"
          alt="/good-commit-message/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/0c061905-eb53-4a8c-a277-6519e1ce2a49"
          alt="/good-commit-message/"
          height={200}
        />
      )}[props.size],"/install-private-packages-with-yarn-berry/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/install-private-packages-with-yarn-berry/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/install-private-packages-with-yarn-berry/"
          height={200}
        />
      )}[props.size],"/knu-lms-scheduler/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/5ce48afd-9e2c-47c0-82ed-f9deac8556f6"
          alt="/knu-lms-scheduler/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/5ce48afd-9e2c-47c0-82ed-f9deac8556f6"
          alt="/knu-lms-scheduler/"
          height={200}
        />
      )}[props.size],"/nest-js/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c24d9728-71e0-46d4-8c33-e206df94d3e0"
          alt="/nest-js/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c24d9728-71e0-46d4-8c33-e206df94d3e0"
          alt="/nest-js/"
          height={200}
        />
      )}[props.size],"/korea-webtoon-api-update/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/99b6a086-1283-4088-81cc-4cb857c3ccdb"
          alt="/korea-webtoon-api-update/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/99b6a086-1283-4088-81cc-4cb857c3ccdb"
          alt="/korea-webtoon-api-update/"
          height={200}
        />
      )}[props.size],"/nodejs-crawling/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a"
          alt="/nodejs-crawling/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a"
          alt="/nodejs-crawling/"
          height={200}
        />
      )}[props.size],"/react-component-concept/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3"
          alt="/react-component-concept/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3"
          alt="/react-component-concept/"
          height={200}
        />
      )}[props.size],"/react-atomic/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3"
          alt="/react-atomic/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3"
          alt="/react-atomic/"
          height={200}
        />
      )}[props.size],"/sass-compiler/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23"
          alt="/sass-compiler/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23"
          alt="/sass-compiler/"
          height={200}
        />
      )}[props.size],"/spawn-node-gyp-enoent/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/spawn-node-gyp-enoent/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a"
          alt="/spawn-node-gyp-enoent/"
          height={200}
        />
      )}[props.size],"/react-design-pattern/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b"
          alt="/react-design-pattern/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b"
          alt="/react-design-pattern/"
          height={200}
        />
      )}[props.size],"/typescript-express-server/": {100: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc"
          alt="/typescript-express-server/"
          height={100}
        />
      ),200: (
        <StaticImage
          className={props.className}
          src="https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc"
          alt="/typescript-express-server/"
          height={200}
        />
      )}[props.size],}[props.slug]}