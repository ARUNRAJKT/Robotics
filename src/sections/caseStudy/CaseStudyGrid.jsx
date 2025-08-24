import React, { useState } from 'react';
import CaseStudyCard from '../../components/CaseStudyCard';
import Pagination from '../../components/Pagination';

const data = [
  {
    image: 'image1.jpg',
    tags: ['Hospitality', 'AI Robotics', 'Smart Navigation'],
    title: 'Advanced Navi Transforming Guest Experiences',
    description: 'How Fortune Robotics helped a 5-star hotel improve guest satisfaction by 32% while cutting operational costs by 40%.',
    clientName: 'LuxuryStay Hotels',
    clientLocation: 'Dubai, UAE',
  },
  {
    image: 'image2.jpg',
    tags: ['Culinary Arts', 'Augmented Reality'],
    title: 'Innovative Dining Solutions Enhance Experience',
    description: 'Discover how AR technology transformed the dining experience, resulting in a 25% increase in customer engagement.',
    clientName: 'GourmetBites',
    clientLocation: 'Paris, France',
  },
  {
    image: 'image1.jpg',
    tags: ['Hospitality', 'AI Robotics', 'Smart Navigation'],
    title: 'Advanced Navi Transforming Guest Experiences',
    description: 'How Fortune Robotics helped a 5-star hotel improve guest satisfaction by 32% while cutting operational costs by 40%.',
    clientName: 'LuxuryStay Hotels',
    clientLocation: 'Dubai, UAE',
  },
  {
    image: 'image2.jpg',
    tags: ['Culinary Arts', 'Augmented Reality'],
    title: 'Innovative Dining Solutions Enhance Experience',
    description: 'Discover how AR technology transformed the dining experience, resulting in a 25% increase in customer engagement.',
    clientName: 'GourmetBites',
    clientLocation: 'Paris, France',
  },
  {
    image: 'image1.jpg',
    tags: ['Hospitality', 'AI Robotics', 'Smart Navigation'],
    title: 'Advanced Navi Transforming Guest Experiences',
    description: 'How Fortune Robotics helped a 5-star hotel improve guest satisfaction by 32% while cutting operational costs by 40%.',
    clientName: 'LuxuryStay Hotels',
    clientLocation: 'Dubai, UAE',
  },
  {
    image: 'image2.jpg',
    tags: ['Culinary Arts', 'Augmented Reality'],
    title: 'Innovative Dining Solutions Enhance Experience',
    description: 'Discover how AR technology transformed the dining experience, resulting in a 25% increase in customer engagement.',
    clientName: 'GourmetBites',
    clientLocation: 'Paris, France',
  },
  {
    image: 'image1.jpg',
    tags: ['Hospitality', 'AI Robotics', 'Smart Navigation'],
    title: 'Advanced Navi Transforming Guest Experiences',
    description: 'How Fortune Robotics helped a 5-star hotel improve guest satisfaction by 32% while cutting operational costs by 40%.',
    clientName: 'LuxuryStay Hotels',
    clientLocation: 'Dubai, UAE',
  },
  {
    image: 'image2.jpg',
    tags: ['Culinary Arts', 'Augmented Reality'],
    title: 'Innovative Dining Solutions Enhance Experience',
    description: 'Discover how AR technology transformed the dining experience, resulting in a 25% increase in customer engagement.',
    clientName: 'GourmetBites',
    clientLocation: 'Paris, France',
  },
];

const ITEMS_PER_PAGE = 6;

export default function CaseStudyGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Innovative Solutions: A Collection of Case Studies.</h2>
      <p style={styles.subheading}>Real-World Applications and Transformative Outcomes.</p>

      <div style={styles.grid}>
        {currentItems.map((item, idx) => (
          <CaseStudyCard key={idx} {...item} />
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
  heading: {
    fontSize: '28px',
    textAlign: 'center',
    fontWeight: '700',
  },
  subheading: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '16px',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '30px',
  },
};
