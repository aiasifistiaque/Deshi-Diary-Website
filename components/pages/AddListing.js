import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
	useAddListingMutation,
	useGetCategoriesQuery,
} from '../../store/services/apiService';
import Page from '../nav/page/Page';
import Button from '../util/button/Button';
import Container from '../util/container/Container';
import Input from '../util/input/Input';
import TextArea from '../util/input/TextArea';
import Section, { SectionInput } from '../util/section/Section';
import * as lib from '../../lib/constants';
import TagsButton from '../addlisting/tags-button/TagsButton';
import Checkbox from '../util/checkbox/Checkbox';
import AddImage from '../listing/addimage/AddImage';
import AddMap from '../map/add-map/AddMap';
import Label from '../util/label/Label';

const AddListing = () => {
	const { data, isError, isFetching } = useGetCategoriesQuery();
	const [add, result] = useAddListingMutation();
	const router = useRouter();
	//
	const [categoryData, setCategoryData] = useState([]);
	//
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

	const [lat, setLat] = useState();
	const [lng, setLng] = useState();

	//tags

	const [services, setServices] = useState([]);
	const [features, setFeatures] = useState([]);
	const [paymentOptions, setPaymentOptions] = useState([]);
	const [tags, setTags] = useState([]);
	const [images, setImages] = useState([]);

	const onSubmit = e => {
		e.preventDefault();

		images;

		add({
			name,
			category,
			email,
			phone,
			extraPhone,
			postCode,
			website,
			description,
			city,
			division,
			street,
			additionalAddress,
			services,
			features,
			paymentOptions,
			tags,
			images,
			lat,
			lng,
		});
	};

	useEffect(() => {
		if (!isFetching && data?.doc) {
			setCategoryData(data.doc);
		}
	}, [isFetching]);

	useEffect(() => {
		if (!result.isUninitialized && result.isSuccess) {
			router.push(`/b/${result.data._id}`);
		}
	}, [result.isSuccess]);

	return (
		<Page>
			<form
				onSubmit={onSubmit}
				onKeyDown={e => {
					return e.key != 'Enter';
				}}>
				<Section title='Add a place to Deshi Diary' top>
					<p>
						Thank you for telling us about a new place to list on Deshi Diary.
						Your contributions make our traveler community stronger. To get
						started, tell us a little bit more about the place.
					</p>
					<SectionInput>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={category}
							onChange={e => setCategory(e)}
							label='Select a category of the business'
							select
							data={categoryData}
							required
						/>
					</SectionInput>
				</Section>

				<Section
					subheading='Add Images'
					subtitle='Accepted photo formats include .jpg .jpeg .gif and .png File size should be less than 15MB'>
					<AddImage setImages={e => setImages(e)} images={images} />
				</Section>
				<Section subheading={'Name & Description'}>
					<SectionInput>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={name}
							onChange={e => setName(e)}
							label='Official Name of the place'
							placeholder='Enter the official name of the place'
							required
						/>
						<TextArea
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
						<Label>Add Location From Map</Label>
						<input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={lat}
							//onChange={e => setCity(e)}
							label='Latitude'
							required
							style={{ height: 1, border: 'none', color: 'white' }}
						/>
						<input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={lat}
							//onChange={e => setCity(e)}
							label=''
							required
							style={{ height: 1, border: 'none', color: 'white' }}
						/>
					</SectionInput>
					<AddMap
						lat={lat}
						setLat={e => setLat(e)}
						lng={lng}
						setLng={e => setLng(e)}
					/>

					{lat && (
						<Label>
							Lat:{lat}, Lng:{lng}
						</Label>
					)}

					<SectionInput>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={city}
							onChange={e => setCity(e)}
							label='City/Town'
							placeholder='Enter the city/town'
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={division}
							onChange={e => setDivision(e)}
							label='Division'
							placeholder='select Division'
							select
							data={lib.data.divisions}
							required
						/>
						<TextArea
							value={street}
							onChange={e => setStreet(e)}
							label='Street Address'
							textArea
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={additionalAddress}
							onChange={e => setAdditionalAddress(e)}
							label='Additional Address Information'
							placeholder='Any additional address information'
							optional
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
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
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={phone}
							onChange={e => setPhone(e)}
							label='Phone Number'
							placeholder='Enter Phone Number'
							required
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={extraPhone}
							onChange={e => setEmail(e)}
							label='Additional Contact Number'
							placeholder='Any additional contact number'
							optional
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={email}
							onChange={e => setEmail(e)}
							label='E-mail'
							placeholder='Enter email address'
							required
						/>
						<Input
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							value={website}
							onChange={e => setWebsite(e)}
							label='Website Url'
							placeholder='https://'
							optional
						/>
					</SectionInput>
				</Section>
				<Section subheading='Service Information'>
					<SectionInput>
						<TagsButton
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							values={tags}
							setValues={e => setTags(e)}
							label={'Tags'}
							placeholder={'Type & hit spacebar to add a service/product'}
						/>
						<TagsButton
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							values={services}
							setValues={e => setServices(e)}
							label={'Services/Products'}
							placeholder={'Type & hit spacebar to add a service/product'}
						/>
						<TagsButton
							onKeyPress={e => {
								e.key === 'Enter' && e.preventDefault();
							}}
							values={features}
							setValues={e => setFeatures(e)}
							label={'Features/Ammenities'}
							placeholder={'Type & hit spacebar to add a features/ammenities'}
						/>
						<Checkbox
							values={paymentOptions}
							setValues={e => setPaymentOptions(e)}
							label='Select Payment Options'
							data={['Cash', 'Visa/Mastercard', 'bKash', 'Nagad', 'Upay']}
						/>
					</SectionInput>
				</Section>
				<Container style={{ marginTop: 32 }} horizontal>
					<Button text>{'Go Back'}</Button>
					<Button submit loading={result.isLoading}>
						{'Save & Continue'}
					</Button>
				</Container>
			</form>
		</Page>
	);
};

export default AddListing;
