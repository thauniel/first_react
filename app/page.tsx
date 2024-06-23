
'use client';
import React, { useState,useEffect} from 'react';
import { SelectValue, SelectTrigger, Select,SelectItem,SelectContent } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import reviewZeroData from './review_zero.json'
import reviewOneData from './review_one.json'
import reviewTwoData from './review_two.json'
import reviewThreeData from './review_three.json'
import reviewFourData from './review_four.json'
import reviewFiveData from './review_five.json'
import reviewSixData from './review_six.json'
import reviewSevenData from './review_seven.json'
import reviewEightData from './review_eight.json'
import reviewNineData from './review_nine.json'
import review_data_1 from './review_data_1.json'
import review_data_2 from './review_data_2.json'
import review_data_3 from './review_data_3.json'
import review_data_4 from './review_data_4.json'
import review_data_5 from './review_data_5.json'
import review_data_6 from './review_data_6.json'
import review_data_7 from './review_data_7.json'
import review_data_8 from './review_data_8.json'
import review_data_9 from './review_data_9.json'
import review_data_10 from './review_data_10.json'
import review_others from './review_others.json'
import review_misuto from './misuto.json'

interface EcComponentsProps {
  // 定义props的类型
}

const EcComponents: React.FC<EcComponentsProps> = () => {

  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  

  // 点击事件处理函数，根据不同的按钮设置不同的数据
  const handleBadgeClick = (reviews: string[]) => {
    setSelectedData(reviews);
  };

  const productNames = ["Product 1", "Product 2", "Product 3"];
  // const productGenres = ["Genre 1", "Genre 2", "Genre 3"];
  const productData: { [key: string]: string[] } = {
    "Genre 1": ["Product 1", "Product 2", "Product 3"],
    "Genre 2": ["Product 4", "Product 5", "Product 6"],
    "Genre 3": ["Product 7", "Product 8", "Product 9"]
  };
  const productGenres = Object.keys(productData);

  return (
    <div className="flex flex-col items-center justify-center p-4">
     <div className="flex justify-between space-x-2 mb-4 w-full">
     <Select onValueChange={(value) => {
          setSelectedGenre(value);
          setSelectedProduct('');  // Reset selected product when genre changes
        }}>
          <SelectTrigger className="border rounded-md py-2 px-4 ">
            <SelectValue placeholder="商品ジャンル" />
          </SelectTrigger>
          <SelectContent>
            {productGenres.map((genre, index) => (
              <SelectItem key={index} value={genre}>{genre}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
          <SelectTrigger className="border rounded-md py-2 px-4 ">
            <SelectValue placeholder="商品名" />
          </SelectTrigger>
          <SelectContent>
            {(productData[selectedGenre] || []).map((name, index) => (
              <SelectItem key={index} value={name}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex space-x-2 mb-4">
        <Badge 
        className="rounded-full py-2 px-4 bg-red-500 " 
        variant="secondary"
        title='positive:228 negative:126'
        onClick={() => handleBadgeClick(review_misuto.reviews)}
        style={{ visibility: selectedProduct === 'Product 1' ? 'visible' : 'hidden' }}>
          音
        </Badge>
   
        <Badge 
        className="rounded-full py-2 px-4 bg-red-500 " 
         variant="secondary"
         title='positive:269 negative:53'
         onClick={() => handleBadgeClick(review_data_8.reviews)}>
          音質
        </Badge>
       
        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:160 negative:21'
        onClick={() => handleBadgeClick(review_data_2.reviews)}>
          商品
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:192 negative:0'
        onClick={() => handleBadgeClick(review_data_6.reviews)}>
          問題
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:157 negative:19'
        onClick={() => handleBadgeClick(review_data_3.reviews)}>
          値段
        </Badge>
        
        <Badge className="rounded-full py-2 px-4 bg-red-500"
        title='positive:75 negative:34'
        variant="secondary"
        onClick={() => handleBadgeClick(review_data_10.reviews)}>
           耳
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:76 negative:16'
        onClick={() => handleBadgeClick(review_data_5.reviews)}>
          接続
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-red-500 " 
        title='positive:36 negative:28'
        variant="secondary"
        onClick={() => handleBadgeClick(review_others.reviews)}>
          充電
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-blue-500" 
        variant="secondary"
        title='positive:48 negative:1'
        onClick={() => handleBadgeClick(review_data_1.reviews)}
        >
          使い勝手
        </Badge>

        {/* <Badge className="rounded-full py-2 px-4  bg-blue-500" 
        variant="secondary"
        title='positive:1 negative:2'
        onClick={() => handleBadgeClick(reviewSixData.reviews)}>
          
        </Badge>
        <Badge className="rounded-full py-2 px-4  bg-blue-500" 
        variant="secondary"
        title='positive:1 negative:2'
        onClick={() => handleBadgeClick(reviewOneData.reviews)}>
          测试按钮
        </Badge> */}
      </div>
      <div className="w-full mb-4 h-[600px] ">
        <ScrollArea className="border rounded-md h-[600px]">
          <div className="flex flex-col space-y-2 p-4">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {selectedData.map((review, index) => (
              <div key={index} className="border-b py-2">{review}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-sm text-gray-500 dark:text-gray-400">その他 (以上の観点を含まない)</div>
        <div className="flex space-x-2">
         
        </div>
      </div>
    </div>
  );
}

interface ChevronIconProps {
  className?: string;
}

function ChevronDownIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
export default EcComponents;

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
