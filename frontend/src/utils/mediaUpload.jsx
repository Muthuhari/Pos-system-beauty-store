import { createClient } from "@supabase/supabase-js";

const anonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGR5Y3prdmZlb3R6Z3p4cmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzc2NTMsImV4cCI6MjA3MTcxMzY1M30.BBgBM3eXEWV9dbKPLQ9ldeHce8KWQNb3nI5ta-fnGXg";
const supabaseUrl = "https://vitdyczkvfeotzgzxrey.supabase.co";

    
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGR5Y3prdmZlb3R6Z3p4cmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzc2NTMsImV4cCI6MjA3MTcxMzY1M30.BBgBM3eXEWV9dbKPLQ9ldeHce8KWQNb3nI5ta-fnGXg
//Data API: Project URL: https://vitdyczkvfeotzgzxrey.supabase.co


const supabase = createClient(supabaseUrl, anonKey);


export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {
            const timestamp = new Date().getTime();
            const fileName = timestamp+file.name

			supabase.storage
				.from("images")
				.upload(fileName, file, {
					upsert: false,
					cacheControl: "3600",
				})
				.then(() => {
					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

					resolve(publicUrl);
				}).catch(
                    ()=>{
                        reject("An error occured")
                    }
                )
		}
	});
}
