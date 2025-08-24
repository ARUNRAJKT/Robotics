import React, { useState } from 'react';
import BlogCard from '../../components/BlogCard';
import Pagination from '../../components/Pagination';

// Blog data
const blogData = [
  {
    image: 'path-to-image1.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image2.jpg',
    tag: 'Technology Advancements',
    date: 'Sep 15, 2025',
    title: 'Exploring the future of quantum computing',
    description: 'Quantum computing promises to revolutionize the way we process information.',
  },
  {
    image: 'path-to-image3.jpg',
    tag: 'Market Analysis',
    date: 'Oct 12, 2025',
    title: 'The rise of virtual reality in education',
    description: 'Virtual reality is transforming the educational landscape, providing immersive learning.',
  },
  {
    image: 'path-to-image4.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image1.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image2.jpg',
    tag: 'Technology Advancements',
    date: 'Sep 15, 2025',
    title: 'Exploring the future of quantum computing',
    description: 'Quantum computing promises to revolutionize the way we process information.',
  },
  {
    image: 'path-to-image3.jpg',
    tag: 'Market Analysis',
    date: 'Oct 12, 2025',
    title: 'The rise of virtual reality in education',
    description: 'Virtual reality is transforming the educational landscape, providing immersive learning.',
  },
  {
    image: 'path-to-image4.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image1.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image2.jpg',
    tag: 'Technology Advancements',
    date: 'Sep 15, 2025',
    title: 'Exploring the future of quantum computing',
    description: 'Quantum computing promises to revolutionize the way we process information.',
  },
  {
    image: 'path-to-image3.jpg',
    tag: 'Market Analysis',
    date: 'Oct 12, 2025',
    title: 'The rise of virtual reality in education',
    description: 'Virtual reality is transforming the educational landscape, providing immersive learning.',
  },
  {
    image: 'path-to-image4.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image1.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image2.jpg',
    tag: 'Technology Advancements',
    date: 'Sep 15, 2025',
    title: 'Exploring the future of quantum computing',
    description: 'Quantum computing promises to revolutionize the way we process information.',
  },
  {
    image: 'path-to-image3.jpg',
    tag: 'Market Analysis',
    date: 'Oct 12, 2025',
    title: 'The rise of virtual reality in education',
    description: 'Virtual reality is transforming the educational landscape, providing immersive learning.',
  },
  {
    image: 'path-to-image4.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image1.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    image: 'path-to-image2.jpg',
    tag: 'Technology Advancements',
    date: 'Sep 15, 2025',
    title: 'Exploring the future of quantum computing',
    description: 'Quantum computing promises to revolutionize the way we process information.',
  },
  {
    image: 'path-to-image3.jpg',
    tag: 'Market Analysis',
    date: 'Oct 12, 2025',
    title: 'The rise of virtual reality in education',
    description: 'Virtual reality is transforming the educational landscape, providing immersive learning.',
  },
  {
    image: 'path-to-image4.jpg',
    tag: 'Industry Trends',
    date: 'Aug 07, 2025',
    title: 'A beginner’s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },

];

const ITEMS_PER_PAGE = 6;

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        {currentItems.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: '1200px',
    margin: '50px auto',
    padding: '0 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '30px',
  },
};
