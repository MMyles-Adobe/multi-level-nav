import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { View, TableView, TableHeader, TableBody, Column, Row, Cell, Link, StatusLight, Avatar, useCollator, useAsyncList, Flex } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import CampaignDashboardPage from '../components/CampaignDashboardPage';

// Helper functions
const uniqueOwners = [
  'Sarah Johnson',
  'Michael Chen',
  'Emily Rodriguez',
  'David Kim',
  'Lisa Patel',
  'James Wilson',
  'Maria Garcia',
  'Robert Taylor',
  'Jennifer Lee',
  'Thomas Brown'
];

function getAvatarUrl(name) {
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${hash}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Helper function to format campaign name
const formatCampaignName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function CampaignDetailsPage() {
  const { campaignSlug } = useParams();
  const campaignName = formatCampaignName(campaignSlug);
  
  return (
    <CampaignDashboardPage campaignName={campaignName} section="Campaign Details">
      <p>Campaign details content will go here.</p>
    </CampaignDashboardPage>
  );
}

function CampaignProjectsPage() {
  const { campaignSlug } = useParams();
  const campaignName = formatCampaignName(campaignSlug);
  const collator = useCollator({ numeric: true });
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const navigate = useNavigate();
  
  const [projects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', owner: uniqueOwners[0], startDate: '2024-04-01', endDate: '2024-06-30' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', owner: uniqueOwners[1], startDate: '2024-05-15', endDate: '2024-08-15' },
    { id: 3, name: 'Marketing Campaign', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-03-01', endDate: '2024-03-31' },
    { id: 4, name: 'Product Launch', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-04-15', endDate: '2024-07-15' },
    { id: 5, name: 'Content Strategy', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-05-01', endDate: '2024-07-31' },
    { id: 6, name: 'E-commerce Platform', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-04-10', endDate: '2024-07-10' },
    { id: 7, name: 'Social Media Integration', status: 'Planning', owner: uniqueOwners[6], startDate: '2024-05-20', endDate: '2024-08-20' },
    { id: 8, name: 'Data Analytics Dashboard', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-04-05', endDate: '2024-07-05' },
    { id: 9, name: 'Customer Support Portal', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-02-15', endDate: '2024-03-15' },
    { id: 10, name: 'Inventory Management System', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-04-20', endDate: '2024-07-20' }
  ]);

  const list = useAsyncList({
    async load() {
      return {
        items: projects.sort((a, b) => collator.compare(a.name, b.name))
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];
          
          if (first == null && second == null) return 0;
          if (first == null) return sortDescriptor.direction === 'ascending' ? -1 : 1;
          if (second == null) return sortDescriptor.direction === 'ascending' ? 1 : -1;
          
          if (sortDescriptor.column === 'startDate' || sortDescriptor.column === 'endDate') {
            const dateA = new Date(first);
            const dateB = new Date(second);
            return sortDescriptor.direction === 'ascending' 
              ? dateA - dateB
              : dateB - dateA;
          }
          
          const comparison = collator.compare(first, second);
          return sortDescriptor.direction === 'ascending' ? comparison : -comparison;
        })
      };
    },
    initialSortDescriptor: {
      column: 'name',
      direction: 'ascending'
    }
  });
  
  return (
    <CampaignDashboardPage campaignName={campaignName} section="Projects">
      <TableView
        aria-label="Campaign Projects table"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        height={700}
        overflowMode="nowrap"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <TableHeader>
          <Column key="name" allowsSorting>Name</Column>
          <Column key="status" allowsSorting>Status</Column>
          <Column key="owner" allowsSorting>Owner</Column>
          <Column key="startDate" allowsSorting>Start Date</Column>
          <Column key="endDate" allowsSorting>End Date</Column>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <Row>
              <Cell>
                <Link
                  onPress={() => {
                    const projectSlug = item.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    navigate(`/project/${projectSlug}/details`);
                  }}
                >
                  {item.name}
                </Link>
              </Cell>
              <Cell>
                <StatusLight 
                  variant={
                    item.status === 'Completed' ? 'positive' :
                    item.status === 'Planning' ? 'notice' :
                    'info'
                  }
                >
                  {item.status}
                </StatusLight>
              </Cell>
              <Cell>
                <Flex gap="size-100" alignItems="center">
                  <Avatar 
                    src={getAvatarUrl(item.owner)}
                    alt={`${item.owner}'s avatar`}
                    size="avatar-size-100"
                  />
                  <span>{item.owner}</span>
                </Flex>
              </Cell>
              <Cell>{formatDate(item.startDate)}</Cell>
              <Cell>{formatDate(item.endDate)}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </CampaignDashboardPage>
  );
}

function CampaignAssetsPage() {
  const { campaignSlug } = useParams();
  const campaignName = formatCampaignName(campaignSlug);
  
  return (
    <CampaignDashboardPage campaignName={campaignName} section="Assets">
      <p>Campaign assets content will go here.</p>
    </CampaignDashboardPage>
  );
}

// Make sure to export all components
export {
  CampaignDetailsPage,
  CampaignProjectsPage,
  CampaignAssetsPage
}; 