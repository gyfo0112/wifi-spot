import React from 'react'

const AboutPage = () => {
  return (
    <div className='max-w-2xl mx-auto rounded-2xl border bg-white p-8 shadow-sm'>
      <h1 className='text-2xl font-bold mb-4 text-slate-900'>About Parking Spot 🚗</h1>
      
      <div className='space-y-4 text-slate-600 leading-relaxed'>
        <p>
          <strong>Parking Spot</strong>은 주변의 공영주차장 정보를 지도에서 한눈에 확인하고, 
          원하시는 주차장을 쉽게 찾을 수 있도록 도와주는 웹 서비스입니다.
        </p>
        
        <h2 className='text-lg font-semibold text-slate-800 mt-6 mb-2'>✨ 주요 기능</h2>
        <ul className='list-disc list-inside space-y-2 ml-2'>
          <li><strong>지도 기반 검색:</strong> 카카오맵을 통해 주차장 위치를 직관적으로 확인</li>
          <li><strong>키워드 검색:</strong> 원하는 지역이나 주차장 이름을 검색하여 빠르게 찾기</li>
          <li><strong>즐겨찾기:</strong> 자주 이용하는 주차장은 하트(❤)를 눌러 별도로 모아보기</li>
        </ul>

        <h2 className='text-lg font-semibold text-slate-800 mt-6 mb-2'>📊 데이터 출처</h2>
        <p>
          본 서비스에서 제공하는 주차장 정보는 최신 공공데이터를 기반으로 제공됩니다.
        </p>

        <div className='mt-8 pt-6 border-t text-sm text-slate-500 text-center'>
          <p>© 2026 Parking Spot. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage