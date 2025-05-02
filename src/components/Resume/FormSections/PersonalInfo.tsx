
import React from 'react';
import { TextInput, TextArea, Card, CardHeader, CardTitle, CardDescription, CardContent, Select } from '@/components/UI';
import { useResumeContext } from '@/context/ResumeContext';
import { countries } from '@/data/countries';

const PersonalInfo: React.FC = () => {
  const { resumeData, updateContactInfo } = useResumeContext();
  const { contactInfo } = resumeData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateContactInfo({
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Add your personal and contact details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            name="firstName"
            value={contactInfo.firstName}
            onChange={handleChange}
            placeholder="John"
            required
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={contactInfo.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={contactInfo.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            required
          />
          <TextInput
            label="Phone"
            name="phone"
            value={contactInfo.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <TextInput
            label="Address (Optional)"
            name="address"
            value={contactInfo.address || ''}
            onChange={handleChange}
            placeholder="123 Main Street"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TextInput
            label="City (Optional)"
            name="city"
            value={contactInfo.city || ''}
            onChange={handleChange}
            placeholder="New York"
          />
          <TextInput
            label="State (Optional)"
            name="state"
            value={contactInfo.state || ''}
            onChange={handleChange}
            placeholder="NY"
          />
          <TextInput
            label="Zip Code (Optional)"
            name="zipCode"
            value={contactInfo.zipCode || ''}
            onChange={handleChange}
            placeholder="10001"
          />
          <Select
            label="Country (Optional)"
            name="country"
            value={contactInfo.country || ''}
            onChange={handleChange}
            options={[
              { value: '', label: 'Select country' },
              ...countries.map(country => ({ value: country, label: country }))
            ]}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="LinkedIn (Optional)"
            name="linkedIn"
            value={contactInfo.linkedIn || ''}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
          <TextInput
            label="Website (Optional)"
            name="website"
            value={contactInfo.website || ''}
            onChange={handleChange}
            placeholder="johndoe.com"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="GitHub (Optional)"
            name="github"
            value={contactInfo.github || ''}
            onChange={handleChange}
            placeholder="github.com/johndoe"
          />
          <TextInput
            label="Portfolio (Optional)"
            name="portfolio"
            value={contactInfo.portfolio || ''}
            onChange={handleChange}
            placeholder="portfolio.johndoe.com"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <TextArea
            label="Professional Summary (Optional)"
            name="summary"
            value={contactInfo.summary || ''}
            onChange={handleChange}
            placeholder="Brief summary of your professional background, key skills, and career goals..."
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
