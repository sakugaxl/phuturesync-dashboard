import { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { db, setDoc, doc, storage, auth, getDoc } from '../firebaseconfig/firebaseconfig'; 
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Firebase Storage imports

export default function ProfileSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    regNumber: '',
    vatNumber: '',
    address: '',
    email: '',
    phone: '',
    website: '',
  });
  const [logo, setLogo] = useState<File | null>(null); // State for logo

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const docRef = doc(db, 'users', userId);
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          console.log(data)
          setFormData(data);
        }
      }).catch((error) => {
        console.error('Error getting document:', error);
      });
    }
  }, []);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    localStorage.setItem('formData', JSON.stringify({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setLogo(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));

    // Handle file upload to Firebase Storage if logo is selected
    if (logo) {
      const storageRef = ref(storage, `logos/${logo.name}`);
      const uploadTask = uploadBytesResumable(storageRef, logo);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
        },
        (error) => {
          console.error('Error uploading logo:', error);
          alert('Error uploading logo');
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          // Save the form data along with the logo URL
          const userId = auth.currentUser?.uid; // Get user ID from Firebase Auth
          if (userId) {
            try {
              await setDoc(doc(db, 'users', userId), {
                ...formData,
                logoURL: downloadURL,
              });
              alert('Data saved successfully');
            } catch (error) {
              console.error('Error saving data to Firestore:', error);
              alert('Error saving data');
            }
          }
        }
      );
    } else {
      // Save data without logo
      const userId = auth.currentUser?.uid;
      if (userId) {
        try {
          await setDoc(doc(db, 'users', userId), formData);
          alert('Data saved successfully');
        } catch (error) {
          console.error('Error saving data to Firestore:', error);
          alert('Error saving data');
        }
      }
    }
  };


  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Company Profile</h3>

      <div className="mb-8">
        <div className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg mb-4 relative group cursor-pointer">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg transition-all flex items-center justify-center">
            <Upload className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-gray-400">Logo</span>
        </div>
        <p className="text-sm text-gray-500">Upload your company logo</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select industry</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="services">Services</option>
            </select>
          </div>

          <div>
            <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Registration Number
            </label>
            <input
              type="text"
              id="regNumber"
              value={formData.regNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter registration number"
            />
          </div>

          <div>
            <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-1">
              VAT Number (Optional)
            </label>
            <input
              type="text"
              id="vatNumber"
              value={formData.vatNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter VAT number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Business Address
          </label>
          <textarea
            id="address"
            rows={3}
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter business address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="url"
            id="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter website URL"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
