import React, { useState } from 'react';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Container from '../util/container/Container';
import Input from '../util/input/Input';
import Section, { SectionInput } from '../util/section/Section';

const categoryData = [{ name: 'Cafe' }, { name: 'Hotel' }];

const AddListing = () => {
	const [category, setCategory] = useState();
	const [name, setName] = useState();
	const [description, setDescription] = useState();
	const [city, setCity] = useState();
	const [division, setDivision] = useState();
	const [street, setStreet] = useState();
	const [additionalAddress, setAdditionalAddress] = useState();
	const [postCode, setPostCode] = useState();
	const [phone, setPhone] = useState();
	const [extraPhone, setExtraPhone] = useState();
	const [email, setEmail] = useState();
	const [website, setWebsite] = useState();

	return (
		<Page>
			<Section title='Add a place to Deshi Diary' top>
				<p>
					Thank you for telling us about a new place to list on Deshi Diary.
					Your contributions make our traveler community stronger. To get
					started, tell us a little bit more about the place.
				</p>
				<SectionInput>
					<Input
						value={category}
						onChange={e => setCategory(e)}
						label='Select a category of the business'
						select
						data={categoryData}
					/>
				</SectionInput>
			</Section>
			<Section
				subheading='Add Images'
				subtitle='Accepted photo formats include .jpg .jpeg .gif and .png File size should be less than 15MB'></Section>
			<Section subheading={'Name & Description'}>
				<SectionInput>
					<Input
						value={name}
						onChange={e => setName(e)}
						label='Official Name of the place'
						placeholder='Enter the official name of the place'
					/>
					<Input
						value={description}
						onChange={e => setDescription(e)}
						label='Description of the place'
						textArea
						optional
					/>
				</SectionInput>
			</Section>
			<Section subheading='Address'>
				<SectionInput>
					<Input
						value={city}
						onChange={e => setCity(e)}
						label='City/Town'
						placeholder='Enter the city/town'
					/>
					<Input
						value={division}
						onChange={e => setDivision(e)}
						label='Division'
						placeholder='select Division'
						select
						data={[{ name: 'Dhaka' }, { name: 'Sylhet' }]}
					/>
					<Input
						value={street}
						onChange={e => setStreet(e)}
						label='Street Address'
						textArea
					/>
					<Input
						value={additionalAddress}
						onChange={e => setAdditionalAddress(e)}
						label='Additional Address Information'
						placeholder='Any additional address information'
						optional
					/>
					<Input
						value={postCode}
						onChange={e => setPostCode(e)}
						label='Postal Code'
						placeholder='Postal Code'
						type='number'
					/>
				</SectionInput>
			</Section>
			<Section subheading='Contact Information'>
				<SectionInput>
					<Input
						value={phone}
						onChange={e => setPhone(e)}
						label='Phone Number'
						placeholder='Enter Phone Number'
					/>
					<Input
						value={extraPhone}
						onChange={e => setEmail(e)}
						label='Additional Contact Number'
						placeholder='Any additional contact number'
						optional
					/>
					<Input
						value={email}
						onChange={e => setEmail(e)}
						label='E-mail'
						placeholder='Enter email address'
					/>
					<Input
						value={website}
						onChange={e => setWebsite(e)}
						label='Website Url'
						placeholder='https://'
						optional
					/>
				</SectionInput>
			</Section>
			<Container style={{ marginTop: 32 }} horizontal>
				<Button text>{'Go Back'}</Button>
				<Button>{'Save & Continue'}</Button>
			</Container>
		</Page>
	);
};

export default AddListing;
